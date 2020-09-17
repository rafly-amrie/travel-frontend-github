import React from 'react'
import {render} from '@testing-library/react'
import Button from './index'

test('should not allowed to click the button if isDisabled is present', () => {
    const {container} = render (<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test 