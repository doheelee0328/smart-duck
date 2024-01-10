import { render, screen } from '@testing-library/react'
import Homepage from './Homepage'

describe('Homepage Component', () => {
  it('should render the heading named Welcome To Smart Duck', () => {
    render(<Homepage />)
    const homepageHeading = screen.getByRole('heading')
    expect(homepageHeading).toBeInTheDocument()
    expect(homepageHeading.textContent).toBe(/welcome to the smart duck/i)
  })
})
