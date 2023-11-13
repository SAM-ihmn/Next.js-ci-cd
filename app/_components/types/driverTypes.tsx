export type driverTransactionsDataType = {
  code: number;
  title: string;
  transactionType: "کارت به کارت" | "پرداخت نقد";
  trackingNumber: number;
  date: string;
  WalletBalance: number;
  transactionAmount: number;
};