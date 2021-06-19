import { TitleComponet } from '../../atoms';

import { CotentFooter, ContentMain, ContentChildren, Redirect } from './style';
import { useTheme } from 'styled-components';

function Footer() {
  const dateCopy = new Date().getFullYear();
  const theme = useTheme();
  return (
    <CotentFooter>
      <ContentMain>
        <ContentChildren>
          <TitleComponet
            fontSize="15px"
            variant="title"
            color={theme.color.yellowText}
          >
            Author:
            <Redirect href="#">Edison Alba</Redirect>
          </TitleComponet>
        </ContentChildren>
        <ContentChildren>
          <TitleComponet
            fontSize="15px"
            variant="title"
            color={theme.color.yellowText}
          >
            Github:
            <Redirect href="https://github.com/edisonAlbaSarmiento">
              edisonAlbaSarmiento
            </Redirect>
          </TitleComponet>
        </ContentChildren>
        <ContentChildren>
          <TitleComponet
            fontSize="15px"
            variant="title"
            color={theme.color.yellowText}
          >
            Email:
            <Redirect href="mailto:edi9708@hotmail.com">
              edi9708@hotmail.com
            </Redirect>
          </TitleComponet>
        </ContentChildren>
      </ContentMain>
      <ContentMain>
        <ContentChildren>
          <TitleComponet
            fontSize="15px"
            variant="title"
            color={theme.color.white}
          >
            Copyright {dateCopy}
          </TitleComponet>
        </ContentChildren>
      </ContentMain>
    </CotentFooter>
  );
}

export default Footer;
