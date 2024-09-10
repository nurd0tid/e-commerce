export interface Store {
  id: string;
  name: string;
  slug: string;
  logo: string;
  status: {
    last_active: string;
    is_verified: boolean;
  };
  actions: {
    chat_now: string;
    visit_store: string;
  };
  ratings: {
    total_reviews: string;
    chat_response_rate: string;
    chat_response_time: string;
  };
  products: number;
  store_info: {
    joined: string;
    followers: string;
  };
  description: string;
}
