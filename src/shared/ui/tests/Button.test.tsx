import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button.tsx'

describe('Button component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('applies provided className', () => {
    render(<Button className="custom-class">Click Me</Button>)
    const button = screen.getByText('Click Me')
    expect(button).toHaveClass('custom-class')
  })

  it('displays Spinner when loading is true', () => {
    render(<Button loading>Click Me</Button>)
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('does not display Spinner when loading is false', () => {
    render(<Button>Click Me</Button>)
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('disables button correctly', () => {
    render(<Button disabled>Click Me</Button>)
    const button = screen.getByText('Click Me')
    expect(button).toBeDisabled()
  })

  it('applies type attribute correctly', () => {
    render(<Button type="submit">Submit</Button>)
    const button = screen.getByText('Submit')
    expect(button).toHaveAttribute('type', 'submit')
  })
})
