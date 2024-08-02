import { render, screen } from '@testing-library/react'
import { FormGroup } from '../FGroup.tsx'

describe('FormGroup component', () => {
  it('renders label correctly', () => {
    render(<FormGroup label="Username">Input</FormGroup>)
    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(
      <FormGroup label="Username">
        <input />
      </FormGroup>,
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('displays asterisk when is_required is true', () => {
    render(
      <FormGroup label="Username" is_required>
        Input
      </FormGroup>,
    )
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('does not display asterisk when is_required is false', () => {
    render(<FormGroup label="Username">Input</FormGroup>)
    expect(screen.queryByText('*')).not.toBeInTheDocument()
  })

  it('applies htmlFor attribute correctly to label', () => {
    render(
      <FormGroup label="Username" htmlFor="username-input">
        <input id="username-input" />
      </FormGroup>,
    )
    const label = screen.getByText('Username').closest('label')
    expect(label).toHaveAttribute('for', 'username-input')
  })
})
