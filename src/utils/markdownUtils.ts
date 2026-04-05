export const getMarkdownContent = async (fileName: string): Promise<string> => {
  const response = await fetch(`${import.meta.env.BASE_URL}articles/${fileName}`);
  return response.text();
}; 