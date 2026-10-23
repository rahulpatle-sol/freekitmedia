export type ContactState = {
  ok: boolean;
  errors: { name?: string; phone?: string; businessType?: string } | null;
};
