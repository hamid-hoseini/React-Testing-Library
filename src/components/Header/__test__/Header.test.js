import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
    test('should render same text passed into title prop', () => {
        render(
            <Header 
              title="My ToDo"
            />
        );
        const h1Element = screen.getByText(/My ToDo/i);
        expect(h1Element).toBeInTheDocument();
    });
})