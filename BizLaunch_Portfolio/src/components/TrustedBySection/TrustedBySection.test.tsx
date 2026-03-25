import { render, screen } from '@testing-library/react';
import TrustedBySection from './TrustedBySection';

test('renders Trusted By section', () => {
    render(<TrustedBySection />);
    const linkElement = screen.getByText(/Trusted By/i);
    expect(linkElement).toBeInTheDocument();
});