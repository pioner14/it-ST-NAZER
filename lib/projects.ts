// Sample portfolio data - in a real app this would come from a database or CMS
export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl?: string;
  details?: string;
  challenges?: string;
  solution?: string;
  results?: string;
  date?: string;
}

const sampleProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'E-commerce Website',
    description: 'A full-featured online store with payment integration and inventory management.',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/placeholder-ecommerce.jpg',
    details: 'This project involved implementing complex features and solving challenging problems. We used modern development practices to deliver a high-quality, scalable solution that met our client\'s requirements.',
    challenges: 'The main challenge was optimizing performance for large datasets while maintaining a responsive user interface.',
    solution: 'We implemented a caching layer and optimized our database queries to achieve the desired performance.',
    results: 'The project was delivered on time and received positive feedback from the client. Performance metrics showed a 40% improvement in page load times.',
    date: '2023-05-15'
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'A secure mobile application for managing bank accounts and transactions.',
    category: 'Mobile Development',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    imageUrl: '/placeholder-banking.jpg',
    details: 'This project involved implementing complex features and solving challenging problems. We used modern development practices to deliver a high-quality, scalable solution that met our client\'s requirements.',
    challenges: 'The main challenge was ensuring security and compliance with financial regulations.',
    solution: 'We implemented advanced encryption and followed strict security protocols.',
    results: 'The application passed all security audits and has been successfully deployed to app stores.',
    date: '2023-08-20'
  },
  {
    id: '3',
    title: 'Healthcare Dashboard',
    description: 'A data visualization dashboard for healthcare analytics and patient management.',
    category: 'Data Visualization',
    technologies: ['Next.js', 'D3.js', 'PostgreSQL'],
    imageUrl: '/placeholder-healthcare.jpg',
    details: 'This project involved implementing complex features and solving challenging problems. We used modern development practices to deliver a high-quality, scalable solution that met our client\'s requirements.',
    challenges: 'The main challenge was visualizing complex data in an intuitive and user-friendly interface.',
    solution: 'We implemented interactive charts and visualizations with clear data pathways.',
    results: 'The dashboard improved data comprehension by 60% and reduced decision-making time.',
    date: '2023-11-10'
  }
];

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  // In a real application, this would fetch from an API or database
  return new Promise((resolve) => {
    setTimeout(() => resolve(sampleProjects), 300); // Simulate network delay
  });
}

export async function getPortfolioProjectById(id: string): Promise<PortfolioProject | undefined> {
  const projects = await getPortfolioProjects();
  return projects.find(project => project.id === id);
}