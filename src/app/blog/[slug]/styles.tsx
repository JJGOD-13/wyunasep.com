'use client'
import styled from  'styled-components';

export const Heading = styled.h1`
    --tw-text-opacity: 1;
    color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
    line-height: 1;
   `;

export const SubHeading = styled.h2`
    --tw-text-opacity: 1;
    color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
    font-size: 2rem /* 32px */;
    line-height: 1;
    `;

export const Paragraph = styled.p`
    --tw-text-opacity: 1;
    color: var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));
    font-size: 1rem /* 16px */;
    line-height: 1;
    text-wrap: pretty;
    `;