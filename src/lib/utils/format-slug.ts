// utils/formatSlug.js
export function formatSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Заміна пробілів на тире
    .replace(/[^a-z0-9\-]/g, "") // Видалення недопустимих символів
    .replace(/\-+/g, "-"); // Видалення дубльованих тире
}
