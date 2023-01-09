import collapseSrc from '../../../assets/collapse.png';
import expandSrc from '../../../assets/expand.png';
import { StyledImg } from './style';

const Icon = ({ expanded }) => {
  if (expanded === true) {
    return <StyledImg src={collapseSrc} alt={'Masquer'} />;
  }

  return <StyledImg src={expandSrc} alt={'Afficher'} />;
};

export default Icon;
