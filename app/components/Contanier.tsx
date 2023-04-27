interface ContanierProps {
  children: React.ReactNode;
}

const Contanier: React.FC<ContanierProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Contanier;
