import type { ImageMetadata } from 'astro';
import assembly from '../assets/photos/02-assembly-house-colours-from-balcony.jpg';
import labRoom from '../assets/photos/03-science-lab-interior-charts.jpg';
import labGold from '../assets/photos/04-science-lab-bench-golden-light.jpg';
import lawyers from '../assets/photos/07-career-day-lawyers.jpg';
import doctors from '../assets/photos/08-career-day-doctors.jpg';
import labDemo from '../assets/photos/09-lab-teacher-titration-demo.jpg';
import eventDay from '../assets/photos/10-event-balloons-alphabet-day.jpg';
import labGroup from '../assets/photos/11-lab-students-group.jpg';
import building from '../assets/photos/12-college-building-balloons-wide.jpg';
import labBuilding from '../assets/photos/13-laboratory-building-flags.jpg';
import walkway from '../assets/photos/15-compound-walkway-a.jpg';
import mural from '../assets/photos/17-science-mural-wide.jpg';
import welcome from '../assets/photos/18-compound-welcome-banner.jpg';
import assembly2 from '../assets/photos/19-assembly-house-colours-ground.jpg';

export type Category = 'Campus' | 'Science' | 'Student life' | 'Career Day';
export interface Photo { img: ImageMetadata; alt: string; caption: string; category: Category }

export const photos = {
  building: { img: building, category: 'Campus', caption: 'Topheight College', alt: 'Two-storey Topheight College building decorated with balloons' },
  labBuilding: { img: labBuilding, category: 'Campus', caption: 'The laboratory block', alt: 'Topheight College laboratory building with flags in front' },
  walkway: { img: walkway, category: 'Campus', caption: 'Inside the school compound', alt: 'Paved walkway through the Topheight school compound' },
  welcome: { img: welcome, category: 'Campus', caption: 'Welcome to Topheight', alt: 'School compound with a welcome banner by the gate' },
  mural: { img: mural, category: 'Campus', caption: 'Our science mural', alt: 'Painted mural of young scientists on a Topheight school building' },
  labGold: { img: labGold, category: 'Science', caption: 'Morning light in the chemistry lab', alt: 'Laboratory bench with beakers, flasks and a burette' },
  labRoom: { img: labRoom, category: 'Science', caption: 'Biology corner of the laboratory', alt: 'Laboratory with anatomy charts, stools and a microscope' },
  labDemo: { img: labDemo, category: 'Science', caption: 'Titration practical', alt: 'Teacher demonstrating a titration to secondary students in lab coats' },
  labGroup: { img: labGroup, category: 'Science', caption: 'College students in the lab', alt: 'Topheight College students in green polo shirts and lab coats' },
  assembly: { img: assembly, category: 'Student life', caption: 'Morning assembly in house colours', alt: 'Pupils lined up in purple, green, yellow, red and blue house sportswear' },
  assembly2: { img: assembly2, category: 'Student life', caption: 'House spirit on sports day', alt: 'Pupils in house sportswear gathering in front of Topheight College' },
  eventDay: { img: eventDay, category: 'Student life', caption: 'Celebration day', alt: 'Young pupils at a school celebration with balloons and alphabet cards' },
  lawyers: { img: lawyers, category: 'Career Day', caption: 'Career Day: future lawyers', alt: 'Young pupils dressed as lawyers in wigs and gowns' },
  doctors: { img: doctors, category: 'Career Day', caption: 'Career Day: future doctors', alt: 'Pupils in white coats with stethoscopes' },
} satisfies Record<string, Photo>;

export const allPhotos: Photo[] = Object.values(photos);
