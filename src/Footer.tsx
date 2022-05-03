type FooterProps = {
  copyright: string;
};

export const Footer: React.FC<FooterProps> = (props) => <footer>{props.copyright}</footer>;
