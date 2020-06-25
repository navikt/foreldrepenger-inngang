import { EngangsstonadSection } from 'app/pages/om-engangsstønad/OmEngangsstønad';
import { ForeldrepengerSection } from 'app/types/Section';
import { Page } from 'app/types/Page';

export const getForeldrepengerSectionUrl = (section: ForeldrepengerSection) => `${Page.OmForeldrepenger}#${section}`;

export const getEngangsstønadSectionUrl = (section: EngangsstonadSection) => `${Page.OmEngangsstønad}#${section}`;
