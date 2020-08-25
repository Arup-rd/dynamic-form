export const Data = {
  fields: [
    {
      type: 'info_html',
      content: '<h3>Please fill up the following form</h3>'
    },
    {
      name: 'first_name',
      type: 'text',
      label: 'First Name',
      placeholder: 'First Name',
      required: true,
      validation_message: 'First name is required'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      required: true,
      validation_message: 'Email is required'
    },
    {
      name: 'ocupation',
      type: 'multi-select',
      label: 'Ocupation',
      placeholder: 'Select Ocupation',
      required: true,
      validation_message: 'Ocupation is required',
      options: [
        {
          doctor: 'Doctor',
          engineer: 'Engineer',
          teacher: 'Teacher',
          other: 'Other'
        }
      ]
    },
    {
      name: 'status',
      type: 'radio',
      label: 'Status',
      required: true,
      validation_message: 'Status is required',
      options: [
        {
          valid: 'Valid',
          invalid: 'Invalid'
        }
      ]
    },
    {
      name: 'internal_status',
      type: 'select',
      label: 'Internal Status',
      required: true,
      validation_message: 'Internal Status is required',
      options: [
        {
          valid: 'Valid',
          invalid: 'Invalid'
        }
      ]
    }
  ]
}