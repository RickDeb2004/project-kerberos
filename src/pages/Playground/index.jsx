import NewsLetterSection from '../../components/molecules/Newsletter';
import { Container } from './styles';
import Faq from '../../components/molecules/faq/faq';

const Playground = () => {
  return (
    <>
      <Container>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Body1>Body 1</Body1>
        <Body2>Body 2</Body2>
        <Body3>Body 3</Body3>
        <ButtonMeta>Button Meta</ButtonMeta>
        <NavText>Nav Text</NavText>
        <Button text='Primary Button' variant='primary' />
        <Button text='Primary Button' variant='secondary' />
      </Container>
      <Faq />
      <MentorCarousel />
    


      
    </>
  );
};

export default Playground;
