import HomeIcon from 'assets/images/svg/home.svg';
import UserIcon from 'assets/images/svg/user.svg';
import GraduationIcon from 'assets/images/svg/graduation-hat.svg';
import WorkIcon from 'assets/images/svg/work.svg';

const releventIcon = (category: string) => {
  switch (category) {
    case 'home':
      return HomeIcon;
    case 'school':
      return GraduationIcon;
    case 'work':
      return WorkIcon;
    default:
      return UserIcon;
  }
};

export default releventIcon;
