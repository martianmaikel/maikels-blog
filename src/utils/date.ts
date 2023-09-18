export function toLocalDEString(datetime: string) {
    const date = new Date(datetime);
    return date.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}