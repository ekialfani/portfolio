import CardItem from './cardItem';

export default function Cards({className, projects}) {
  return (
    <div
      className={className}>
      {projects.map((project) => (
        <CardItem
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}