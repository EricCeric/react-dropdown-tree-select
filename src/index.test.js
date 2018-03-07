import React from 'react'
import renderer from 'react-test-renderer'

import DropdownTreeSelect from './index'

describe('<DropdownTreeSelect/>', () => {
  it('renders correctly', () => {
    const data = [
      {
        label: 'VP Accounting',
        tagClassName: 'special',
        children: [
          {
            label: 'iWay',
            children: [
              { label: 'Universidad de Especialidades del Espíritu Santo' },
              { label: 'Marmara University' },
              { label: 'Baghdad College of Pharmacy' }
            ]
          },
          {
            label: 'KDB',
            children: [{ label: 'Latvian University of Agriculture' }, { label: 'Dublin Institute of Technology' }]
          },
          {
            label: 'Justice',
            children: [
              { label: 'Baylor University' },
              { label: 'Massachusetts College of Art' },
              { label: 'Universidad Técnica Latinoamericana' },
              { label: 'Saint Louis College' },
              { label: 'Scott Christian University' }
            ]
          },
          {
            label: 'Utilization Review',
            children: [
              { label: 'University of Minnesota - Twin Cities Campus' },
              { label: 'Moldova State Agricultural University' },
              { label: 'Andrews University' },
              { label: 'Usmanu Danfodiyo University Sokoto' }
            ]
          },
          {
            label: 'Norton Utilities',
            children: [
              { label: 'Universidad Autónoma del Caribe' },
              { label: 'National University of Uzbekistan' },
              { label: 'Ladoke Akintola University of Technology' },
              { label: 'Kohat University of Science and Technology  (KUST)' },
              { label: 'Hvanneyri Agricultural University' }
            ]
          }
        ]
      },
      {
        label: 'Database Administrator III',
        disabled: true,
        children: [
          {
            label: 'TFS',
            children: [
              { label: 'University of Jazeera' },
              { label: 'Technical University of Crete' },
              { label: "Ecole Nationale Supérieure d'Agronomie et des Industries Alimentaires" },
              { label: 'Ho Chi Minh City University of Natural Sciences' }
            ]
          },
          {
            label: 'Overhaul',
            children: [
              { label: 'Technological University (Taunggyi)' },
              { label: 'Universidad de Las Palmas de Gran Canaria' },
              { label: 'Olympia College' },
              { label: 'Franklin and Marshall College' },
              { label: 'State University of New York College of Environmental Science and Forestry' }
            ]
          },
          {
            label: 'GTK',
            children: [
              { label: 'Salisbury State University' },
              { label: 'Evangelische Fachhochschule für Religionspädagogik, und Gemeindediakonie Moritzburg' },
              { label: 'Kilimanjaro Christian Medical College' }
            ]
          },
          {
            label: 'SRP',
            children: [
              { label: 'Toyo Gakuen University' },
              { label: 'Riyadh College of Dentistry and Pharmacy' },
              { label: 'Aichi Gakusen University' }
            ]
          }
        ]
      }
    ]

    const tree = renderer.create(<DropdownTreeSelect data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
