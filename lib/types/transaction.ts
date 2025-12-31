export type Transaction = {
  id: string;
  merchant_name: string | null;
  amount: number;
  date: string;
  pending: boolean;
  category_primary: string;
  logo_url?: string | null;
  payment_channel: string;
};
