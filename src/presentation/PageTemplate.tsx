import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function PageTemplate({ title, children }: Props) {
  return (
    <Root>
      <ResponsiveContainer>
        <Title>{title}</Title>
        {children}
      </ResponsiveContainer>
    </Root>
  );
}

const Root = styled.main`
  background-color: #eee;
  min-height: 100vh;
`;

const ResponsiveContainer = styled.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
  position: sticky;
  top: 0;
`;
