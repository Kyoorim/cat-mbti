import React from "react";
// css-in-js
import styled from "styled-components";
// import PangImage from "../assets/main.jpeg";
import Button from "react-bootstrap/Button";
// 링크 타고 이동할 수 있는 useNavigate
import { useSearchParams, useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  //최종 도출된 결과객체
  const [resultData, setResultData] = React.useState({});

  // console.log(mbti);

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImage>
          <img
            src={resultData.image}
            className="rounded-circle"
            width={400}
            height={400}
          />
        </LogoImage>
        <Name>예비집사님과 찰떡궁합인 댕댕이는 {resultData.name}</Name>
        <Desc>{resultData.desc}</Desc>
        <Button
          style={{ fontFamily: "EF_Diary" }}
          onClick={() => navigate("/")}
        >
          테스트 다시하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "EF_Diary";
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30pt;
  font-weight: 700;
  margin-top: 20px;
  font-family: "EF_Diary";
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Name = styled.div`
  font-size: 20pt;
  margin: 30px 0px;
  font-family: "EF_Diary";
  font-weight: 700;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin: 10px 0px;
  font-family: "EF_Diary";
  padding: 20px;
`;
