interface IBlogProps {
  title: string;
  content: string;
}

export function Blog(props: IBlogProps) {
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </article>
  );
}
