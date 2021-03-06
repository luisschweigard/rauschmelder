const bearerTokenKey = "BEARER_TOKEN";
const eventKey = "CURRENT_EVENT_KEY";

export function getBearerToken() {
  return localStorage.getItem(bearerTokenKey);
}

export function setBearerToken(token: string) {
  localStorage.setItem(bearerTokenKey, token);
}

export function deleteBearerToken() {
  deleteEventId();
  localStorage.removeItem(bearerTokenKey);
}

// Maybe set this to the full event json so start- and end_date can be checked before the request
export function getEventId(): number {
  return Number(localStorage.getItem(eventKey) ?? "-1");
}

export function setEventId(event_id: number) {
  localStorage.setItem(eventKey, event_id.toString());
}

export function deleteEventId() {
  localStorage.removeItem(eventKey);
}
