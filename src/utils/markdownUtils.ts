export const getMarkdownContent = async (fileName: string): Promise<string> => {
  const response = await fetch(`/portfolio/articles/${fileName}`);
  return response.text();
}; 