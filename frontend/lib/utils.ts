export function formatDate(input: string) {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "medium"
    }).format(new Date(input));
  } catch {
    return input;
  }
}

export function classNames(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}
