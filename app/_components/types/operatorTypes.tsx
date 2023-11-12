export type PersonalData = {
  name: string | null,
  nationalCode: string | null,
  phoneNumber: string | null,
  email: string | null
}

export type LoginData = {
  username: string | null,
  password: string | null
}

export type AccessLevel = {
  id: number | null;
  name: string | null;
};