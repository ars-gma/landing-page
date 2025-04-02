export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone) {
  return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
}
