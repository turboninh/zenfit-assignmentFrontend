// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import media from '../utils/media';

export const BoardActions = styled.div`
  padding: 8px 0 16px;
  
  ${media.desktop`
    padding: 10px 16px;
    transform: translateY(50%);
    text-align: center;
    padding: 0;
  `}
`;

export const BoardHeader = styled.div`
  backface-visibility: hidden;
  padding: 12px 0;
  text-align: left;
  position: relative;
  z-index: 20;

  ${media.desktop`
    border-bottom: 1px solid #f2f6fa;  
    padding: 12px 16px;
  `}
`;

export const BoardHeaderMeta = styled.div`
  color: #8898aa;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;

export const BoardTitle = styled.h5`
  color: #32325d;
  margin: 0;
  text-transform: capitalize;
  font-weight: 600;
`;

export const BoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  transition: background-color .2s linear;
  margin-bottom: 16px;
  border-color: #f2f6fa;
  border-style: solid;
  border-radius: 4px;

  &:not(:last-child) {
    border-width: 0 0 1px 0;
  }

  &:last-child {
    border-width: 0;
  }

  ${media.desktop`
    flex-direction: column;
    border-radius: 0;
    border-width: 0 1px 0 0;
    margin-bottom: 0;

    :hover {
      background: #f2f6fa !important;

      ${BoardHeader} {
        border-bottom-color: #fff;
      }
    }

    :first-child {
      border-radius: 4px 0 0 4px;
    }

    :last-child {
      border-radius: 0 4px 4px 0;
      border-right-width: 0;
    }
  `}
`;

export const BoardItems = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  margin: 0 -8px;

  ${media.desktop`
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 16px 26px;
    margin: 0;
    width: 100%;
  `}
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;

  ${media.desktop`
    margin-bottom: 26px;
    border: 1px solid #f2f6fa;
    border-radius: 4px;
    flex-direction: row;
  `}
`;