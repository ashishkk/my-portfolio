import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public works=[
    {
      companyName: 'United Ailrines',
      duration: [
        {
          title: 'Web Developer',
          workDur: 'July 2019 - Present',
          content: [
            'Contact Center Applications - Aero.',
            'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, AngularJS, Angular 8, KnockoutJS.',
            'Communincate with Stakeholders and End users on a timely basis to understand the user experience.',
            'Gather feature level requirements from Business Analysts and Product Owners.',
            'Analyze the technical implications and approach which will be feasible to achieve quality product.'
          ],
        },
        {
          title: 'Web Developer',
          workDur: 'June 2018 - July 2019',
          content: [
            'Contact Center Applications - Aero.'
          ],
        }
        
      ],
      url: 'https://www.united.com/en/us'
    },
    {
      companyName: 'Nemo IT Solution, Inc.',
      duration: [
        {
          title: 'UI Developer',
          workDur: 'Mar 2017 - Present',
          content: [
              'Contact Center Applications - Compass.',
              'Compass is being developed to replace our 20-year old EZR system used by 5,500 agents world-wide to create and manage reservations as well as modify tickets, sell ancillaries and assist with customer inquiries.',
              'Worked on basic shopping, ticketing and basic upgrades along with a bridge to EZR that enables an agent to switch seamlessly from Compass to EZR without losing any customer data collected.',
              'Enabled the company-wide MileagePlus 2017 program, which changed the redemption miles from fixed to variable for award travel.'
            ],
          }
      ],     
      url: '"http://www.nemoits.com'
    },
    {
      companyName: 'University of Mary Hardin-Byalor',
      duration: [
        {
          title: 'Applications Developer',
          workDur: 'Feb 2016 - Dec 2016',
          content: [
            'Developed cutting edge User interfaces for some Major IT gaints in the USA.',
            'Built and Supported the Contact Center Application for Major Airline Company leveraging third-party and internal APIs.',
            'Architected and implemented the front-end using AngularJS, KnockOutJS, ES6, BootStrap, HTML5, CSS3, GIT, GITHUB.'
          ]
        }
      ], 
      url: 'https://go.umhb.edu'
    },
    {
      companyName: 'Amazon India',
      duration: [
        {
          title: 'Associate',
          workDur: 'Aug 2013 - Dec 2014',
          content: [
            'Supported North America domain.',
            'Troubleshoot issue with the Kindle Device.',
            'Debug and provide resolution to customer on call.'
          ],
        }
      ],
      url: 'https://www.amazon.com'
    }
  ];
  selectedWork = this.works[0];
  constructor() { }

  ngOnInit() {
  }
  selectWork(companyName: string) {
    this.selectedWork = this.works.find(work => {
      return work.companyName === companyName;
    });
  }
}
