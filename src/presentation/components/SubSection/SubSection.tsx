import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

export function SubSection({ className, title, children }: Props) {
  return (
    <Section className={className}>
      <h3>{title}</h3>
      {children}
    </Section>
  );
}

const Section = styled.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`;
