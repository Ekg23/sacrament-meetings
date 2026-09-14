import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting [] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 2, title: 'The Spirit of God' },
        openingPrayer: 'Sister Williams',
        wardBusiness: [{ description: 'Sustaining of new Primary president' }],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
        speakers: [
        { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
        { name: 'Youth Choir', topic: '', type: 'musical-number' }
        ],
        closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
        closingPrayer: 'Brother Davis',
        announcements: ['Ward temple night: May 10']
  },
  {
        id: 2,
        date: '2026-09-13',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Anderson',
        openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
        openingPrayer: 'Brother Taylor',
        wardBusiness: [{ description: 'Release of Young Women president' }],
        stakeBusiness: false,
        sacramentHymn: { number: 193, title: 'There Is a Green Hill Far Away' },
        speakers: [
            { name: 'Brother Wilson', topic: 'The Atonement of Jesus Christ', type: 'speaker' },
            { name: 'Sister Clark', topic: 'Enduring to the End', type: 'speaker' }
        ],
        closingHymn: { number: 85, title: 'How Firm a Foundation' },
        closingPrayer: 'Sister Martinez',
        announcements: ['Youth conference sign-ups due May 15', 'Ward temple night: May 10']
    },
    {
        id: 3,
        date: '2026-09-20',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 66, title: 'Rejoice, the Lord Is King!' },
        openingPrayer: 'Brother Lee',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
        speakers: [],
        closingHymn: { number: 219, title: 'God Be with You Till We Meet Again' },
        closingPrayer: 'Sister Baker',
        announcements: ['Fast offerings due to Bishop by end of month']
    },
    {
        id: 4,
        date: '2026-09-27',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Anderson',
        openingHymn: { number: 1, title: 'The Morning Breaks' },
        openingPrayer: 'Sister Young',
        wardBusiness: [{ description: 'Sustaining of new Elders Quorum president' }],
        stakeBusiness: true,
        sacramentHymn: { number: 190, title: 'Reverently and Meekly Now' },
        speakers: [
            { name: 'Elder Thompson', topic: 'Missionary Work in Our Community', type: 'speaker' },
            { name: 'Ward Choir', topic: '', type: 'musical-number' }
        ],
        closingHymn: { number: 56, title: 'Redeemer of Israel' },
        closingPrayer: 'Brother Garcia',
        announcements: ['Stake conference next month', 'Primary program practice: May 28']
    },
    {
        id: 5,
        date: '2026-10-04',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 27, title: 'Sing Praise to Him' },
        openingPrayer: 'Brother Nguyen',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 174, title: "'Tis Sweet to Sing the Matchless Love" },
        speakers: [
            { name: 'Sister Patel', topic: 'Charity, the Pure Love of Christ', type: 'speaker' }
        ],
        closingHymn: { number: 249, title: 'Called to Serve' },
        closingPrayer: 'Sister Lopez',
        announcements: ['Youth activity: June 5', 'Ward campout planning meeting after church']
    }
    
];

// function to get all meetings
export function getMeetings(): SacramentMeeting[] {
    return meetings
}

// function to get meeting by id
export function getMeetingById(id: number): SacramentMeeting | undefined {
    return meetings.find((m) => m.id === id)
}