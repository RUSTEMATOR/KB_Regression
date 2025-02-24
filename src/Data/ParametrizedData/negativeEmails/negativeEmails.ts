export const NEGATIVE_EMAILS = [
    { email: "automaton-anything#kingbilly.xyz", error: "is invalid" },
    { email: "automaton-anything@kingbilly-xyz", error: "is invalid" },
    { email: "automaton-anything@kingbilly_xyz", error: "is invalid" },
    { email: "automaton-anything@kingbilly..xyz", error: "is invalid" },
    { email: "", error: "must be completed" },  // Empty value
    { email: "änýthing@kingbilly.xyz", error: "is invalid" },
    { email: "automaton-anything@softs_wis..com", error: "is invalid" },
    { email: "automaton-anything.kingbilly.xyz", error: "is invalid" },
    { email: "automaton-anything@@kingbilly.com", error: "is invalid" },
    { email: "automaton-anything@king billy.com", error: "is invalid" },
    { email: "automaton-anything@kingbilly..com", error: "is invalid" },
    { email: "automaton-anything@", error: "is invalid" }
];

export const EMAIL_INPUT_ERROR_TEXT = 'is invalid'