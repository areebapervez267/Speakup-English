/**
 * Manual bank-transfer checkout.
 *
 * This is the path used before a payment gateway exists: the student transfers
 * the monthly amount to the owner's Pakistani bank account, emails the receipt,
 * and an administrator opens the membership from `/admin/memberships`.
 *
 * The panel only renders when every field below is filled in, so an unfinished
 * configuration can never show a blank or wrong account number on a live money
 * page. `enabled` stays the final kill switch.
 */
export type ManualPaymentSettings = {
  enabled: boolean;
  /** Shown on `/premium`, e.g. "Rs 799 / month". */
  priceLabel: string;
  /** Billing period an administrator should grant, in months. */
  periodMonths: number;
  bankName: string;
  accountTitle: string;
  iban: string;
  /** Where students send the payment screenshot. */
  supportEmail: string;
};

export const manualPayments: ManualPaymentSettings = {
  enabled: true,
  priceLabel: "Rs 799 / month",
  periodMonths: 1,
  bankName: "Faysal Bank",
  accountTitle: "Areeba Pervez",
  iban: "PK23FAYS3064488000007577",
  supportEmail: "areeba.techmed@gmail.com",
};

/** True only when the settings are complete enough to collect money safely. */
export function isManualCheckoutReady(
  settings: ManualPaymentSettings = manualPayments,
): boolean {
  const required = [
    settings.bankName,
    settings.accountTitle,
    settings.iban,
    settings.supportEmail,
  ];

  return (
    settings.enabled &&
    settings.priceLabel.trim().length > 0 &&
    required.every((value) => value.trim().length > 0)
  );
}
