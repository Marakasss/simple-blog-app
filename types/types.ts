export interface LocaleParams {
  params: Promise<{
    locale: "en" | "uk";
  }>;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
