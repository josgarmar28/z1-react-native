import React, { FC } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Close } from '../../../../components/Icons';
import useConnect from './connect';
import {
  Article,
  Author,
  Container,
  Content,
  Image,
  Scroll,
  Title,
} from './styles';
import { Props } from './types';

const Details: FC<Props> = () => {
  const { handleBack } = useConnect();
  return (
    <Scroll showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Container>
          <BorderlessButton activeOpacity={0.75} onPress={handleBack}>
            <Close />
          </BorderlessButton>

          <Article>Article</Article>

          <Title>Title</Title>

          <Author>Author</Author>

          <Image source={{ uri: 'https://placeimg.com/640/360/animals' }} />

          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ante diam, tincidunt luctus ex vitae, vehicula cursus diam. Nulla
            non neque venenatis, pellentesque turpis tincidunt, consectetur
            lorem. Aenean posuere porttitor nibh, eu hendrerit nulla fringilla
            nec. Donec ac velit sapien. Etiam porttitor, massa eget interdum
            auctor, ante ipsum dapibus sem, ac pulvinar ipsum ante vel purus.
            Nulla facilisi. Mauris vitae tellus lorem.\n\n Quisque eu pretium
            velit. Etiam eget purus condimentum, dapibus metus nec, gravida
            nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            dignissim, dui quis hendrerit euismod, lectus lacus volutpat sapien,
            nec malesuada eros nibh in felis. Fusce ac imperdiet metus. Nam
            scelerisque congue risus ut consectetur. Curabitur sed dolor
            elementum, dictum velit sit amet, lacinia sapien. Sed vehicula velit
            ac sapien faucibus porttitor. Mauris id tellus in purus lacinia
            auctor et et leo. Duis semper odio tempus est bibendum, quis feugiat
            odio malesuada. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Etiam at rhoncus orci. Sed
            quis quam eget leo maximus pellentesque.\n \n Morbi tempor velit
            eros, ut blandit nulla condimentum eu. Donec aliquet orci a enim
            lobortis, at semper sem consequat. Nam placerat et metus quis
            auctor. Etiam auctor lorem est, non ullamcorper tellus porta in. Sed
            rhoncus elementum neque, luctus semper enim ultrices ut. Suspendisse
            ultricies ex in justo molestie varius. Nunc odio lacus, rutrum ac
            dapibus vestibulum, tincidunt ac magna. Aenean efficitur odio at
            condimentum sodales. Donec eget suscipit orci, id tempor arcu. Sed
            eu est risus. Sed in nulla id velit condimentum mattis. Aliquam at
            nulla venenatis, efficitur velit ac, dignissim ligula. Etiam aliquet
            vitae sem in dictum.\n \n Mauris sed turpis at metus suscipit
            ullamcorper eget gravida neque. Morbi nulla purus, semper sed
            iaculis vitae, tristique a nunc. Donec non efficitur ante. Phasellus
            nec velit enim. Nullam volutpat sapien sit amet felis ultricies, sit
            amet iaculis elit ultrices. Maecenas egestas lectus eu pretium
            porta. Integer molestie, diam scelerisque tincidunt euismod, dui
            urna varius lectus, porttitor ultricies nisl magna at urna. Fusce at
            purus at neque ultricies bibendum non vitae velit. Nullam hendrerit
            iaculis justo ut consequat. Integer interdum, purus in laoreet
            auctor, leo nisi pulvinar tellus, ut mattis tortor lacus vitae
            ante.\n \n Phasellus tincidunt pharetra efficitur. Maecenas eget
            neque purus. Donec ac turpis magna. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Proin nec odio dignissim, posuere
            orci in, laoreet mauris. Quisque varius odio ac nisi hendrerit, at
            egestas diam efficitur. Curabitur tempus nisi vitae mollis maximus.
            Phasellus gravida feugiat ipsum, quis hendrerit erat ultricies ac.
          </Content>
        </Container>
      </SafeAreaView>
    </Scroll>
  );
};

export default Details;
