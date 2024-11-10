export const getMarkdownContent = async (fileName: string): Promise<string> => {
  const response = await fetch(`/articles/${fileName}`);
  return response.text();
}; 