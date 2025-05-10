export const parseError = (error: unknown): string[] | undefined => {
    if (!error) return [];
  
    if ("data" in (error as any)) {
      const data = (error as any).data;
      return typeof data === "object" && data.message
        ? [data.message] 
        : ["Unknown error"];
    }
};