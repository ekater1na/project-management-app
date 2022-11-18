import { TeamMembers } from '../../components/TeamMembers/TeamMembers';
import { Introduction } from '../../components/Introduction/Introduction';
import { Technologies } from '../../components/Technologies/Technologies';

export const WelcomePage = () => {
  return (
    <>
      <Introduction />
      <Technologies />
      <TeamMembers />
    </>
  );
};
