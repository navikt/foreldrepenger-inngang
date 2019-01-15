import fs from 'fs';
import React from 'react';
import { mount } from 'enzyme';
import Innhold from '../src/app/utils/innhold/Innhold';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { getContentFiles } from '../jest/utils';

const IntlMock = ({ children }) => (
    <IntlProvider key="nb" locale="nb" messages={{ lukk_informasjon: 'Lukk' }}>
        {children}
    </IntlProvider>
);

let allContentFiles = [];

beforeAll(() => {
    return getContentFiles().then((files) => (allContentFiles = files));
});

describe('Innhold klarer å rendre XML-strings til React-komponenter', () => {
    test('innhold klarer å tolke <innhold>-tags', () => {
        const xml = '<innhold>Tekst</innhold>';
        const component = mount(<Innhold source={xml} />);

        expect(component.exists('div.innhold')).toBe(true);
        expect(component.find('div').props().children).toEqual('Tekst');
    });

    test('innhold klarer å tolke <avsnitt>-tags', () => {
        const xml = '<innhold><avsnitt>Tekst</avsnitt></innhold>';
        const component = mount(<Innhold source={xml} />);

        expect(component.exists('p.typo-normal')).toBe(true);
        expect(component.exists('p.innhold__avsnitt')).toBe(true);
        expect(component.find('p').props().children).toEqual('Tekst');
    });

    test('innhold klarer å tolke <liste>-tags', () => {
        const xml = '<innhold><liste><punkt>Tekst</punkt></liste></innhold>';

        const component = mount(<Innhold source={xml} />);
        expect(component.exists('ul')).toBe(true);
        expect(component.exists('li')).toBe(true);
        expect(
            component
                .find('div')
                .find('ul')
                .find('li')
                .props().children
        ).toEqual('Tekst');
    });

    test('innhold klarer å tolke <lesmer>-tags', () => {
        const xml =
            '<innhold><lesmer intro="Introduksjon"><avsnitt>Tekst</avsnitt></lesmer></innhold>';

        const component = mount(<Innhold source={xml} />);

        expect(component.exists('div.lesMer')).toBe(true);
        expect(component.exists('div.ekspanderbartPanel')).toBe(true);
        expect(component.find('span.typo-element').props().children).toEqual('Introduksjon');
        component.find('button').simulate('click');
        expect(component.find('p.typo-normal').props().children).toEqual('Tekst');
    });

    test('innhold klarer å tolke <lesmer>-tags med prop "liten"', () => {
        const xml =
            '<innhold><lesmer liten="true" intro="Introduksjon"><avsnitt>Tekst</avsnitt></lesmer></innhold>';

        const component = mount(
            <IntlMock>
                <Innhold source={xml} />
            </IntlMock>
        );

        expect(component.exists('div.utvidetInformasjon')).toBe(true);
        expect(component.find('span.typo-normal').props().children).toEqual('Introduksjon');

        component.find('button.infoToggler').simulate('click');

        expect(
            component
                .find('span.infoToggler__label')
                .find('span.typo-normal')
                .props().children
        ).toEqual('Lukk');

        expect(
            component
                .find('p.innhold__avsnitt')
                .first()
                .props().children
        ).toEqual('Tekst');
    });
});

describe('Innholdsfiler kompilerer til gyldige React-komponenter', () => {
    test('innhold kompilerer til gyldige React-komponenter', () => {
        const invalidContentFiles = [];
        const spy = jest.spyOn(global.console, 'error');

        for (const filePath of allContentFiles) {
            const file = fs.readFileSync(filePath, 'utf8');

            const component = mount(
                <MemoryRouter>
                    <IntlMock>
                        <Innhold source={file} />
                    </IntlMock>
                </MemoryRouter>
            );

            const consoleErrorDuringRendering = spy.mock.calls.length > 0;
            if (!component.exists('div.innhold') || consoleErrorDuringRendering) {
                invalidContentFiles.push(filePath);
            }

            spy.mockReset();
        }

        expect(invalidContentFiles).toHaveLength(0);
    });
});
