# Project Creator Skill

## Purpose
Help users create new projects by asking the right questions and setting up the project structure automatically.

## When to Use
When a user wants to start a new project (website, app, API, etc.), invoke this skill to guide them through the setup process.

## Process

### Phase 1: Project Discovery
Ask the user these questions to understand their needs:

1. **Project Type**
   - What type of project? (Website, Web App, Mobile App, API, CLI Tool, Library, Other)
   
2. **Technology Preferences**
   - Frontend: React, Vue, Angular, Svelte, Vanilla JS, Other?
   - Backend: Node.js, Python, Go, Java, .NET, None?
   - Database: PostgreSQL, MySQL, MongoDB, SQLite, None?
   - Styling: CSS, SCSS, Tailwind, styled-components, Material UI, Other?
   - Language: TypeScript, JavaScript, Python, Other?

3. **Features & Functionality**
   - What are the main features?
   - User authentication needed?
   - API integration?
   - File uploads?
   - Real-time features?
   - Admin panel?

4. **Design & UX**
   - Dark mode, light mode, or both?
   - Responsive design required?
   - Any design preferences or inspirations?

5. **Deployment & DevOps**
   - Where to deploy? (Vercel, Netlify, AWS, Heroku, Other)
   - CI/CD needed?
   - Docker required?

6. **Project Info**
   - Project name?
   - Description?
   - Author/organization name?

### Phase 2: Project Setup
Once you have all the information:

1. **Initialize the project** with appropriate tools (npm init, create-react-app, etc.)
2. **Install dependencies** based on technology choices
3. **Create folder structure** following best practices
4. **Set up configuration files** (tsconfig, eslint, prettier, etc.)
5. **Create base files** (App component, main entry, routes, etc.)
6. **Add example code** to demonstrate the setup

### Phase 3: Verification
1. Run the build to ensure no errors
2. Provide instructions on how to start the project
3. List next steps for the user

## Output Format

### Initial Response
When invoked, start with:
```
I'll help you create a new project! Let me ask you a few questions to set it up properly.

1. What type of project are you building? (Website, Web App, Mobile App, API, CLI Tool, Library, Other)
```

### Follow-up Questions
Ask questions one at a time or group related questions together to avoid overwhelming the user.

### Final Summary
Before creating files, provide a summary:
```
## Project Summary

**Name:** [project-name]
**Type:** [project-type]
**Stack:** [technologies]
**Features:** [main-features]

Shall I proceed with creating this project?
```

## Notes
- Always use the user's preferred technology choices
- Follow established conventions for the chosen stack
- Create a todo list to track setup progress
- Run verification commands (build, lint, test) after setup
- Provide clear next steps and documentation
