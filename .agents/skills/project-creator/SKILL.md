# Project Creator Skill

## Purpose
Help users create new projects for their portfolio by asking the right questions and automatically adding the project to `db.json` with all required information.

## When to Use
When a user wants to add a new project to their portfolio, invoke this skill to guide them through collecting all necessary information and updating the database.

## Process

### Phase 1: Project Discovery

Ask the user these questions to gather all project information:

#### 1. Basic Information
- **Project name?** (will be used as `title`)
- **Short description?** (1-2 sentences for `shortDescription`)
- **Long description?** (detailed paragraph for `longDescription`)
- **Category?** (Web Application, Mobile App, API Service, Library, Tool, Other)
- **Status?** (Production, Beta, Development, Concept)
- **Release date?** (YYYY-MM-DD format for `releaseDate`)

#### 2. Project Type (IMPORTANT)
- **Is this a professional or personal project?**
  - Professional → Ask for experience ID (1=D-ICE, 2=ASI, 3=LPG System, or create new)
  - Personal → Set `experienceId: -1`

#### 3. Technologies & Tags
- **Technologies used?** (list for `technologies` array, e.g., react, nodejs, python)
- **Tags?** (3-5 keywords for `tags` array, e.g., Full-Stack, E-Commerce, AI)

#### 4. Media
- **Capsule image URL?** (thumbnail for project cards, `capsuleImage`)
- **Project screenshots?** (2-5 image URLs for `images` array, shown in project detail)
  - Can use placeholder URLs like `https://picsum.photos/...` if no real screenshots

#### 5. Links (Optional)
- **GitHub repository URL?** (optional)
- **Live demo URL?** (optional)
- **Documentation URL?** (optional)

#### 6. Project Slug
- **URL-friendly slug?** (lowercase with hyphens, e.g., `my-awesome-project`)
  - Will be used for routing: `/projects/{slug}`

### Phase 2: Database Update

Once all information is collected:

1. **Read current `db.json`** to get the next available project ID
2. **Create project object** with all collected information
3. **Append to `projects` array** in `db.json`
4. **Verify the JSON is valid** (no syntax errors)

### Phase 3: Verification

1. Run `npm run build` to ensure no TypeScript errors
2. Confirm the project appears in the portfolio
3. Provide the user with the project URL path

## Output Format

### Initial Response
When invoked, start with:
```
I'll help you add a new project to your portfolio! Let me ask you a few questions to gather all the necessary information.

**Basic Information**

1. What's the project name?
```

### Follow-up Questions
Group related questions together to avoid overwhelming the user:

**Example flow:**
1. First message: Project name + short description
2. Second message: Long description + category + status
3. Third message: Professional or personal? (with experience options)
4. Fourth message: Technologies + tags
5. Fifth message: Images (capsule + screenshots)
6. Sixth message: Links (GitHub, demo, docs)

### Final Summary
Before updating `db.json`, provide a summary:
```
## Project Summary

**Name:** [project-name]
**Slug:** [project-slug]
**Category:** [category]
**Status:** [status]
**Type:** Professional (Experience: D-ICE) | Personal
**Technologies:** [tech1, tech2, tech3]
**Tags:** [tag1, tag2, tag3]
**Links:** GitHub, Demo (if provided)

Shall I proceed with adding this project to your portfolio?
```

## Project Object Template

```json
{
  "id": [next-available-id],
  "title": "Project Name",
  "slug": "project-name",
  "shortDescription": "Brief description",
  "longDescription": "Detailed description",
  "capsuleImage": "https://...",
  "images": [
    "https://...",
    "https://..."
  ],
  "technologies": ["react", "nodejs"],
  "tags": ["Full-Stack", "Web"],
  "category": "Web Application",
  "releaseDate": "2024-01-15",
  "status": "Production",
  "links": {
    "github": "https://github.com/...",
    "demo": "https://..."
  },
  "experienceId": 1
}
```

## Experience Reference

Available professional experiences:
| ID | Company | Period |
|----|---------|--------|
| 1 | D-ICE Engineering | 2022 - Present |
| 2 | ASI | 2021 - 2022 |
| 3 | LPG System | Mai-Août 2018 |

For personal projects, use `experienceId: -1`.

## Notes
- Always generate a URL-friendly slug from the project name
- Use placeholder images (`https://picsum.photos/...`) if user has no screenshots ready
- Ensure `experienceId` is set correctly (-1 for personal, 1/2/3 for professional)
- Run build after updating `db.json` to catch any TypeScript issues
- Remind user they can update images later with real screenshots
