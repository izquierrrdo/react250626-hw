export default function Title({ level = 1, children }) {
  const HeaderTagName = `h${level}`;
  return <HeaderTagName>{children}</HeaderTagName>;
}
