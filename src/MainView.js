import React, { Component } from "react";
import ReactList from "react-list";
import styled from "styled-components";
import {Check} from "@styled-icons/fa-solid/Check";
import {Times} from "@styled-icons/fa-solid/Times";
import Spinner from "./Loader/Spinner";
import Container from "./Container";


const Main = styled.div`
  min-height: calc(100vh - 64px);
  padding: 16px 16px 48px 16px;
  background-image: ${({theme}) => `linear-gradient(to top, ${theme.backgroundBottom} 0%, ${theme.backgroundTop} 100%)`};
`;

const Wrapper = styled.div`
  position: relative;
`;

const ListWrapper = styled.div`
  max-height: ${400 - 32}px;
  overflow-y: scroll;
`;

const SpinRow = styled.div`
  width: 100%;
  height: 151px;
  .spinwrap {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: 32px;
    width: 32px;
  }
`;

const StyledPanel = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: Open Sans;
  color: ${({ theme }) => theme.grey};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ListHeader = styled.div`
  display: grid;
  border-bottom: ${({ theme }) => `1px solid ${theme.darkPrimary}`};
  grid-template-columns: minmax(100px, 2fr) minmax(100px, 1.1fr);
  grid-gap: 4px;
  height: 32px;
  align-items: center;
  > div:first-child {
    padding-left : 10px;
  }
  > div:last-child {
    padding-right : 10px;
  }
`;

const listHeight = 400;

const ListRow = styled.div`
  background: ${({index, theme}) => (index % 2 === 0? theme.white : theme.gigalightPrimary)};
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  min-width: 704px;
  border-bottom: ${({ theme }) => `1px solid ${theme.lightPrimary}`};
  display: grid;
  grid-template-columns: minmax(100px, 2fr) minmax(100px, 1.1fr);
  grid-gap: 4px;
  align-items: center;
  word-wrap: break-word;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(255, 255, 255) 0px 1px 0px inset, rgba(255, 255, 255, 0.25) 0px -1px 0px inset, rgb(221, 221, 222) 0px -1px 0px;
    background: linear-gradient(rgb(245, 250, 255), rgb(234, 243, 253));
    border-bottom: 1px solid rgb(234, 243, 253);
  }
  > div {
    padding-left : 20px;
    height: 32px;
    padding-top: 2px;
  }
  > div:first-child {
    padding-left : 10px;
    overflow-y: hidden;
    height: 32px;
    padding-top: 3px;
  }
  ${'' /* > div:last-child {
    padding-right : 10px;
  } */}
  > .on {
    color: ${({ theme }) => `${theme.green}`};
  }
  > .off {
    color: ${({ theme }) => `${theme.red}`};
  }
  a {
    color: #007bff;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #007bff;
      text-decoration: underline;
    }
  }
`;

const TrueMark = styled(Check)`
  color: ${({ theme }) => theme.green};
  width: 16px;
  height: 16px;
`;

const FalseMark = styled(Times)`
  color: ${({ theme }) => theme.red};
  width: 16px;
  height: 16px;
`;

const ResultList = styled.div`
  max-width: 848px;
  max-height: ${listHeight}px;
  overflow: hidden;
  padding: 0 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: ${({ theme }) => `1px solid ${theme.mediumPrimary}`};
  border-radius: 6px;
`;

const list = [
  {
    name: "Roger",
    signedup: false,
  },{
    name: "Camille",
    signedup: false,
  },
  {
    name: "Louis",
    signedup: false,
  },
  {
    name: "Julie",
    signedup: false,
  },
  {
    name: "Antoine",
    signedup: false,
  },
  {
    name: "Etienne",
    signedup: false,
  },
];

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedList: null,
    };
  }
  componentDidMount() {
    //query the list
    this.setState({sortedList: list});
  }

  render() {
    const { sortedList } = this.state;

    return <Main id="mainview">
      <Wrapper>
        <Container>
          <StyledPanel>
            <ResultList>
              <ListHeader>
                <div>
                  Nom
                </div>
                <div>
                  Inscrit?
                </div>
              </ListHeader>
              {!sortedList?
                <SpinRow>
                  <div className="spinwrap">
                    <Spinner/>
                  </div>
                </SpinRow> : null
              }
              {sortedList?
                <ListWrapper>
                  <ReactList
                    itemRenderer={this._renderItem}
                    length={sortedList.length}
                    type="uniform"
                  />
                </ListWrapper> : null
              }
            </ResultList>
          </StyledPanel>
        </Container>
      </Wrapper>
    </Main>;
  }

  _renderItem: Function = (index, key) => {
    const { sortedList } = this.state;
    const user = sortedList[index];
    return <ListRow key={key} index={index}>
      <div>{user.name}</div>
      <div>{user.signedup ? <TrueMark/> : <FalseMark/>}</div>
    </ListRow>;
  }
};

export default MainView;
