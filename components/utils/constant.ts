export enum USER_TYPE {
  GOOGLE_USER = "GOOGLE_USER",
  GUEST = "GUEST"
}

export enum MEETING_TYPE {
  ONLINE = "ONLINE",
  INPERSON = "INPERSON"
}

export enum DATE_TYPE {
  WEEKLY = "WEEKLY",
  ANY = "ANY"
}

export enum PARTICIPANT_ROLE {
  OWNER = "OWNER",
  PARTICIPANT = "PARTICIPANT"
}

export enum RESPONSE_STATUS {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  IFNEEDED = "IFNEEDED"
}

export enum MEETING_STATUS {
  PUBLISHED = "PUBLISHED",
  SCHEDULED = "SCHEDULED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED"
}

export enum SLOT_STATUS {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
  IFNEEDED = "IFNEEDED"
}
