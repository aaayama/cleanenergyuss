/**
 * Electric Provider Data
 * Maps ZIP codes to electric providers by state/region
 * This is a comprehensive dataset for the lead generation system
 */

import type { ElectricProvider } from '@/types';

// Major electric providers organized by state
export const electricProviders: Record<string, ElectricProvider[]> = {
  CA: [
    { id: 'pge', name: 'Pacific Gas & Electric (PG&E)', state: 'CA', city: 'San Francisco', zipCode: '94102', serviceArea: ['San Francisco', 'Oakland', 'San Jose', 'Fresno', 'Sacramento'] },
    { id: 'sce', name: 'Southern California Edison', state: 'CA', city: 'Rosemead', zipCode: '91770', serviceArea: ['Los Angeles', 'Riverside', 'San Bernardino', 'Orange County'] },
    { id: 'sdge', name: 'San Diego Gas & Electric', state: 'CA', city: 'San Diego', zipCode: '92101', serviceArea: ['San Diego', 'Chula Vista', 'Oceanside'] },
    { id: 'ladp', name: 'Los Angeles Department of Water and Power', state: 'CA', city: 'Los Angeles', zipCode: '90012', serviceArea: ['Los Angeles', 'Glendale', 'Burbank'] },
  ],
  TX: [
    { id: 'oncor', name: 'Oncor Electric Delivery', state: 'TX', city: 'Dallas', zipCode: '75201', serviceArea: ['Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving'] },
    { id: 'centerpoint', name: 'CenterPoint Energy', state: 'TX', city: 'Houston', zipCode: '77002', serviceArea: ['Houston', 'Sugar Land', 'The Woodlands', 'Baytown'] },
    { id: 'aep', name: 'AEP Texas', state: 'TX', city: 'Corpus Christi', zipCode: '78401', serviceArea: ['Corpus Christi', 'McAllen', 'Laredo', 'Victoria'] },
    { id: 'tnmp', name: 'Texas-New Mexico Power', state: 'TX', city: 'Lewisville', zipCode: '75067', serviceArea: ['Lewisville', 'Denton', 'Galveston', 'Fort Stockton'] },
  ],
  FL: [
    { id: 'fpl', name: 'Florida Power & Light', state: 'FL', city: 'Juno Beach', zipCode: '33408', serviceArea: ['Miami', 'Fort Lauderdale', 'West Palm Beach', 'Orlando', 'Tampa'] },
    { id: 'duke-fl', name: 'Duke Energy Florida', state: 'FL', city: 'St. Petersburg', zipCode: '33701', serviceArea: ['St. Petersburg', 'Clearwater', 'Ocala', 'Gainesville'] },
    { id: 'teco', name: 'Tampa Electric', state: 'FL', city: 'Tampa', zipCode: '33602', serviceArea: ['Tampa', 'Plant City', 'Zephyrhills'] },
    { id: 'ouc', name: 'Orlando Utilities Commission', state: 'FL', city: 'Orlando', zipCode: '32801', serviceArea: ['Orlando', 'Winter Park', 'Kissimmee'] },
  ],
  NY: [
    { id: 'coned', name: 'Consolidated Edison', state: 'NY', city: 'New York', zipCode: '10003', serviceArea: ['New York City', 'Westchester'] },
    { id: 'nyseg', name: 'New York State Electric & Gas', state: 'NY', city: 'Binghamton', zipCode: '13902', serviceArea: ['Binghamton', 'Syracuse', 'Rochester', 'Buffalo'] },
    { id: 'lipa', name: 'PSEG Long Island', state: 'NY', city: 'Uniondale', zipCode: '11553', serviceArea: ['Long Island', 'Nassau', 'Suffolk'] },
    { id: 'central-hudson', name: 'Central Hudson Gas & Electric', state: 'NY', city: 'Poughkeepsie', zipCode: '12601', serviceArea: ['Poughkeepsie', 'Newburgh', 'Kingston'] },
  ],
  PA: [
    { id: 'peco', name: 'PECO Energy', state: 'PA', city: 'Philadelphia', zipCode: '19101', serviceArea: ['Philadelphia', 'Chester', 'Montgomery', 'Delaware'] },
    { id: 'duke-pa', name: 'Duquesne Light', state: 'PA', city: 'Pittsburgh', zipCode: '15219', serviceArea: ['Pittsburgh', 'Allegheny County'] },
    { id: 'ppl', name: 'PPL Electric Utilities', state: 'PA', city: 'Allentown', zipCode: '18101', serviceArea: ['Allentown', 'Harrisburg', 'Lancaster', 'Scranton'] },
    { id: 'meted', name: 'Met-Ed', state: 'PA', city: 'Reading', zipCode: '19601', serviceArea: ['Reading', 'York', 'Lebanon'] },
  ],
  IL: [
    { id: 'comed', name: 'ComEd', state: 'IL', city: 'Chicago', zipCode: '60601', serviceArea: ['Chicago', 'Rockford', 'Aurora', 'Naperville', 'Joliet'] },
    { id: 'ameren', name: 'Ameren Illinois', state: 'IL', city: 'Springfield', zipCode: '62701', serviceArea: ['Springfield', 'Peoria', 'Decatur', 'Champaign'] },
  ],
  OH: [
    { id: 'aep-oh', name: 'AEP Ohio', state: 'OH', city: 'Columbus', zipCode: '43215', serviceArea: ['Columbus', 'Athens', 'Zanesville'] },
    { id: 'duke-oh', name: 'Duke Energy Ohio', state: 'OH', city: 'Cincinnati', zipCode: '45202', serviceArea: ['Cincinnati', 'Hamilton', 'Middletown'] },
    { id: 'firstenergy', name: 'FirstEnergy', state: 'OH', city: 'Akron', zipCode: '44308', serviceArea: ['Akron', 'Cleveland', 'Toledo', 'Youngstown'] },
    { id: 'dayton', name: 'Dayton Power & Light', state: 'OH', city: 'Dayton', zipCode: '45402', serviceArea: ['Dayton', 'Springfield', 'Kettering'] },
  ],
  GA: [
    { id: 'georgia-power', name: 'Georgia Power', state: 'GA', city: 'Atlanta', zipCode: '30303', serviceArea: ['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Macon'] },
    { id: 'meag', name: 'MEAG Power', state: 'GA', city: 'Atlanta', zipCode: '30309', serviceArea: ['Metro Atlanta'] },
  ],
  NC: [
    { id: 'duke-nc', name: 'Duke Energy Carolinas', state: 'NC', city: 'Charlotte', zipCode: '28202', serviceArea: ['Charlotte', 'Raleigh', 'Durham', 'Greensboro', 'Winston-Salem'] },
    { id: 'dominion', name: 'Dominion Energy North Carolina', state: 'NC', city: 'Raleigh', zipCode: '27601', serviceArea: ['Raleigh', 'Cary', 'Wilmington'] },
  ],
  NJ: [
    { id: 'pseg', name: 'PSE&G', state: 'NJ', city: 'Newark', zipCode: '07102', serviceArea: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth'] },
    { id: 'jersey-central', name: 'Jersey Central Power & Light', state: 'NJ', city: 'Morristown', zipCode: '07960', serviceArea: ['Morristown', 'Trenton', 'Princeton'] },
    { id: 'atlantic-city', name: 'Atlantic City Electric', state: 'NJ', city: 'Pleasantville', zipCode: '08232', serviceArea: ['Atlantic City', 'Ocean City', 'Vineland'] },
    { id: 'rockland', name: 'Orange & Rockland Utilities', state: 'NJ', city: 'Ramsey', zipCode: '07446', serviceArea: ['Ramsey', 'Paramus', 'Hackensack'] },
  ],
  MA: [
    { id: 'eversource', name: 'Eversource Energy', state: 'MA', city: 'Boston', zipCode: '02101', serviceArea: ['Boston', 'Cambridge', 'Lowell', 'Worcester', 'Springfield'] },
    { id: 'national-grid', name: 'National Grid', state: 'MA', city: 'Waltham', zipCode: '02451', serviceArea: ['Waltham', 'Brookline', 'Newton', 'Quincy'] },
    { id: 'unitil', name: 'Unitil', state: 'MA', city: 'Fitchburg', zipCode: '01420', serviceArea: ['Fitchburg', 'Leominster', 'Gardner'] },
  ],
  AZ: [
    { id: 'aps', name: 'Arizona Public Service', state: 'AZ', city: 'Phoenix', zipCode: '85004', serviceArea: ['Phoenix', 'Mesa', 'Tempe', 'Scottsdale', 'Glendale'] },
    { id: 'srp', name: 'Salt River Project', state: 'AZ', city: 'Tempe', zipCode: '85281', serviceArea: ['Tempe', 'Mesa', 'Chandler', 'Gilbert'] },
    { id: 'tuscon', name: 'Tucson Electric Power', state: 'AZ', city: 'Tucson', zipCode: '85701', serviceArea: ['Tucson', 'Oro Valley', 'Marana'] },
  ],
  NV: [
    { id: 'nve', name: 'NV Energy', state: 'NV', city: 'Las Vegas', zipCode: '89101', serviceArea: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'] },
  ],
  CO: [
    { id: 'xcel-co', name: 'Xcel Energy Colorado', state: 'CO', city: 'Denver', zipCode: '80202', serviceArea: ['Denver', 'Colorado Springs', 'Aurora', 'Boulder', 'Fort Collins'] },
  ],
  WA: [
    { id: 'pse-wa', name: 'Puget Sound Energy', state: 'WA', city: 'Bellevue', zipCode: '98009', serviceArea: ['Bellevue', 'Seattle', 'Tacoma', 'Olympia'] },
    { id: 'seattle-city', name: 'Seattle City Light', state: 'WA', city: 'Seattle', zipCode: '98104', serviceArea: ['Seattle'] },
    { id: 'snohomish', name: 'Snohomish County PUD', state: 'WA', city: 'Everett', zipCode: '98201', serviceArea: ['Everett', 'Lynnwood', 'Marysville'] },
  ],
  OR: [
    { id: 'pacificorp', name: 'Pacific Power', state: 'OR', city: 'Portland', zipCode: '97204', serviceArea: ['Portland', 'Salem', 'Eugene', 'Bend'] },
    { id: 'pge-or', name: 'Portland General Electric', state: 'OR', city: 'Portland', zipCode: '97232', serviceArea: ['Portland', 'Beaverton', 'Lake Oswego'] },
  ],
  MI: [
    { id: 'consumers', name: 'Consumers Energy', state: 'MI', city: 'Jackson', zipCode: '49201', serviceArea: ['Jackson', 'Lansing', 'Grand Rapids', 'Flint', 'Saginaw'] },
    { id: 'dte', name: 'DTE Energy', state: 'MI', city: 'Detroit', zipCode: '48226', serviceArea: ['Detroit', 'Ann Arbor', 'Warren', 'Sterling Heights'] },
  ],
  IN: [
    { id: 'duke-in', name: 'Duke Energy Indiana', state: 'IN', city: 'Indianapolis', zipCode: '46204', serviceArea: ['Indianapolis', 'Bloomington', 'Lafayette'] },
    { id: 'aep-in', name: 'AEP Indiana Michigan Power', state: 'IN', city: 'Fort Wayne', zipCode: '46802', serviceArea: ['Fort Wayne', 'South Bend', 'Elkhart'] },
    { id: 'nipsco', name: 'NIPSCO', state: 'IN', city: 'Merrillville', zipCode: '46410', serviceArea: ['Merrillville', 'Gary', 'Hammond'] },
  ],
  WI: [
    { id: 'we-energies', name: 'We Energies', state: 'WI', city: 'Milwaukee', zipCode: '53203', serviceArea: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha'] },
    { id: 'wisconsin-pub', name: 'Wisconsin Public Service', state: 'WI', city: 'Green Bay', zipCode: '54301', serviceArea: ['Green Bay', 'Appleton', 'Oshkosh'] },
  ],
  MN: [
    { id: 'xcel-mn', name: 'Xcel Energy Minnesota', state: 'MN', city: 'Minneapolis', zipCode: '55401', serviceArea: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth'] },
    { id: 'otter-tail', name: 'Otter Tail Power', state: 'MN', city: 'Fergus Falls', zipCode: '56537', serviceArea: ['Fergus Falls', 'Detroit Lakes', 'Alexandria'] },
  ],
  MO: [
    { id: 'ameren-mo', name: 'Ameren Missouri', state: 'MO', city: 'St. Louis', zipCode: '63101', serviceArea: ['St. Louis', 'Kansas City', 'Springfield', 'Columbia'] },
    { id: 'kcp', name: 'Kansas City Power & Light', state: 'MO', city: 'Kansas City', zipCode: '64105', serviceArea: ['Kansas City', 'Independence', 'Lee\'s Summit'] },
  ],
  MD: [
    { id: 'bge', name: 'Baltimore Gas & Electric', state: 'MD', city: 'Baltimore', zipCode: '21201', serviceArea: ['Baltimore', 'Annapolis', 'Columbia'] },
    { id: 'pepco', name: 'Pepco', state: 'MD', city: 'Washington', zipCode: '20001', serviceArea: ['Washington DC', 'Montgomery County', 'Prince George\'s County'] },
    { id: 'potomac-edison', name: 'Potomac Edison', state: 'MD', city: 'Williamsport', zipCode: '21795', serviceArea: ['Williamsport', 'Hagerstown', 'Frederick'] },
  ],
  VA: [
    { id: 'dominion-va', name: 'Dominion Energy Virginia', state: 'VA', city: 'Richmond', zipCode: '23219', serviceArea: ['Richmond', 'Virginia Beach', 'Norfolk', 'Arlington', 'Alexandria'] },
    { id: 'appalachian', name: 'Appalachian Power', state: 'VA', city: 'Roanoke', zipCode: '24011', serviceArea: ['Roanoke', 'Lynchburg', 'Blacksburg'] },
  ],
  SC: [
    { id: 'duke-sc', name: 'Duke Energy South Carolina', state: 'SC', city: 'Greenville', zipCode: '29601', serviceArea: ['Greenville', 'Columbia', 'Charleston', 'Spartanburg'] },
    { id: 'santee', name: 'Santee Cooper', state: 'SC', city: 'Moncks Corner', zipCode: '29461', serviceArea: ['Moncks Corner', 'Myrtle Beach', 'Georgetown'] },
  ],
  TN: [
    { id: 'tva', name: 'Tennessee Valley Authority', state: 'TN', city: 'Knoxville', zipCode: '37902', serviceArea: ['Knoxville', 'Nashville', 'Memphis', 'Chattanooga'] },
    { id: 'memphis-light', name: 'Memphis Light, Gas & Water', state: 'TN', city: 'Memphis', zipCode: '38103', serviceArea: ['Memphis'] },
  ],
  AL: [
    { id: 'alabama-power', name: 'Alabama Power', state: 'AL', city: 'Birmingham', zipCode: '35203', serviceArea: ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville'] },
  ],
  LA: [
    { id: 'entergy-la', name: 'Entergy Louisiana', state: 'LA', city: 'New Orleans', zipCode: '70112', serviceArea: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'] },
    { id: 'cleco', name: 'Cleco', state: 'LA', city: 'Pineville', zipCode: '71360', serviceArea: ['Pineville', 'Alexandria', 'Monroe'] },
  ],
  OK: [
    { id: 'oge', name: 'Oklahoma Gas & Electric', state: 'OK', city: 'Oklahoma City', zipCode: '73102', serviceArea: ['Oklahoma City', 'Tulsa', 'Norman', 'Lawton'] },
    { id: 'pso', name: 'Public Service Company of Oklahoma', state: 'OK', city: 'Tulsa', zipCode: '74103', serviceArea: ['Tulsa', 'Muskogee', 'Bartlesville'] },
  ],
  KS: [
    { id: 'westar', name: 'Evergy (Westar)', state: 'KS', city: 'Topeka', zipCode: '66603', serviceArea: ['Topeka', 'Wichita', 'Kansas City', 'Lawrence'] },
  ],
  NE: [
    { id: 'oppd', name: 'Omaha Public Power District', state: 'NE', city: 'Omaha', zipCode: '68102', serviceArea: ['Omaha', 'Bellevue', 'Papillion'] },
    { id: 'nppd', name: 'Nebraska Public Power District', state: 'NE', city: 'Columbus', zipCode: '68601', serviceArea: ['Columbus', 'Norfolk', 'Grand Island'] },
  ],
  IA: [
    { id: 'midamerican', name: 'MidAmerican Energy', state: 'IA', city: 'Des Moines', zipCode: '50309', serviceArea: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City'] },
    { id: 'alliant', name: 'Alliant Energy', state: 'IA', city: 'Cedar Rapids', zipCode: '52401', serviceArea: ['Cedar Rapids', 'Waterloo', 'Dubuque'] },
  ],
  AR: [
    { id: 'entergy-ar', name: 'Entergy Arkansas', state: 'AR', city: 'Little Rock', zipCode: '72201', serviceArea: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale'] },
  ],
  MS: [
    { id: 'entergy-ms', name: 'Entergy Mississippi', state: 'MS', city: 'Jackson', zipCode: '39201', serviceArea: ['Jackson', 'Gulfport', 'Biloxi', 'Hattiesburg'] },
  ],
  KY: [
    { id: 'lge', name: 'Louisville Gas & Electric', state: 'KY', city: 'Louisville', zipCode: '40202', serviceArea: ['Louisville', 'Lexington', 'Bowling Green'] },
    { id: 'kenergy', name: 'Kenergy', state: 'KY', city: 'Owensboro', zipCode: '42301', serviceArea: ['Owensboro', 'Henderson', 'Madisonville'] },
  ],
  WV: [
    { id: 'appalachian-wv', name: 'Appalachian Power West Virginia', state: 'WV', city: 'Charleston', zipCode: '25301', serviceArea: ['Charleston', 'Huntington', 'Morgantown'] },
    { id: 'mon-power', name: 'Mon Power', state: 'WV', city: 'Fairmont', zipCode: '26554', serviceArea: ['Fairmont', 'Clarksburg', 'Morgantown'] },
  ],
  CT: [
    { id: 'eversource-ct', name: 'Eversource Connecticut', state: 'CT', city: 'Hartford', zipCode: '06103', serviceArea: ['Hartford', 'New Haven', 'Bridgeport', 'Stamford'] },
    { id: 'ui', name: 'United Illuminating', state: 'CT', city: 'New Haven', zipCode: '06510', serviceArea: ['New Haven', 'Bridgeport', 'Milford'] },
  ],
  RI: [
    { id: 'national-grid-ri', name: 'National Grid Rhode Island', state: 'RI', city: 'Providence', zipCode: '02903', serviceArea: ['Providence', 'Warwick', 'Cranston', 'Pawtucket'] },
  ],
  NH: [
    { id: 'eversource-nh', name: 'Eversource New Hampshire', state: 'NH', city: 'Manchester', zipCode: '03101', serviceArea: ['Manchester', 'Nashua', 'Concord'] },
    { id: 'unitil-nh', name: 'Unitil New Hampshire', state: 'NH', city: 'Hampton', zipCode: '03842', serviceArea: ['Hampton', 'Portsmouth', 'Exeter'] },
  ],
  ME: [
    { id: 'cmp', name: 'Central Maine Power', state: 'ME', city: 'Augusta', zipCode: '04330', serviceArea: ['Augusta', 'Portland', 'Lewiston', 'Bangor'] },
    { id: 'versant', name: 'Versant Power', state: 'ME', city: 'Bangor', zipCode: '04401', serviceArea: ['Bangor', 'Presque Isle', 'Ellsworth'] },
  ],
  VT: [
    { id: 'green-mountain', name: 'Green Mountain Power', state: 'VT', city: 'Colchester', zipCode: '05446', serviceArea: ['Burlington', 'Rutland', 'Montpelier'] },
  ],
  DE: [
    { id: 'delmarva', name: 'Delmarva Power', state: 'DE', city: 'Newark', zipCode: '19702', serviceArea: ['Wilmington', 'Dover', 'Newark'] },
  ],
  DC: [
    { id: 'pepco-dc', name: 'Pepco DC', state: 'DC', city: 'Washington', zipCode: '20001', serviceArea: ['Washington DC'] },
  ],
  NM: [
    { id: 'pnm', name: 'PNM Resources', state: 'NM', city: 'Albuquerque', zipCode: '87102', serviceArea: ['Albuquerque', 'Santa Fe', 'Las Cruces'] },
    { id: 'el-paso', name: 'El Paso Electric', state: 'NM', city: 'Las Cruces', zipCode: '88001', serviceArea: ['Las Cruces', 'Alamogordo'] },
  ],
  UT: [
    { id: 'rocky-mountain', name: 'Rocky Mountain Power', state: 'UT', city: 'Salt Lake City', zipCode: '84111', serviceArea: ['Salt Lake City', 'Provo', 'Ogden', 'St. George'] },
  ],
  ID: [
    { id: 'idaho-power', name: 'Idaho Power', state: 'ID', city: 'Boise', zipCode: '83702', serviceArea: ['Boise', 'Nampa', 'Idaho Falls', 'Pocatello'] },
    { id: 'avista', name: 'Avista Utilities', state: 'ID', city: 'Coeur d\'Alene', zipCode: '83814', serviceArea: ['Coeur d\'Alene', 'Lewiston', 'Moscow'] },
  ],
  MT: [
    { id: 'northwestern', name: 'NorthWestern Energy', state: 'MT', city: 'Butte', zipCode: '59701', serviceArea: ['Butte', 'Billings', 'Missoula', 'Great Falls'] },
  ],
  WY: [
    { id: 'rocky-mountain-wy', name: 'Rocky Mountain Power Wyoming', state: 'WY', city: 'Cheyenne', zipCode: '82001', serviceArea: ['Cheyenne', 'Casper', 'Laramie'] },
  ],
  ND: [
    { id: 'otter-tail-nd', name: 'Otter Tail Power ND', state: 'ND', city: 'Fargo', zipCode: '58102', serviceArea: ['Fargo', 'Bismarck', 'Grand Forks'] },
    { id: 'montana-dakota', name: 'Montana-Dakota Utilities', state: 'ND', city: 'Bismarck', zipCode: '58501', serviceArea: ['Bismarck', 'Minot', 'Dickinson'] },
  ],
  SD: [
    { id: 'northwestern-sd', name: 'NorthWestern Energy SD', state: 'SD', city: 'Sioux Falls', zipCode: '57104', serviceArea: ['Sioux Falls', 'Rapid City', 'Aberdeen'] },
  ],
  AK: [
    { id: 'chugach', name: 'Chugach Electric', state: 'AK', city: 'Anchorage', zipCode: '99501', serviceArea: ['Anchorage', 'Eagle River'] },
    { id: 'municipal-light', name: 'Municipal Light & Power', state: 'AK', city: 'Anchorage', zipCode: '99507', serviceArea: ['Anchorage'] },
  ],
  HI: [
    { id: 'hawaiian', name: 'Hawaiian Electric', state: 'HI', city: 'Honolulu', zipCode: '96808', serviceArea: ['Honolulu', 'Maui', 'Hawaii Island', 'Kauai'] },
  ],
};

// ZIP code prefix to state mapping (first 2-3 digits)
export const zipCodeToState: Record<string, string> = {
  // California (90-96)
  '90': 'CA', '91': 'CA', '92': 'CA', '93': 'CA', '94': 'CA', '95': 'CA', '96': 'CA',
  // Texas (75-79, 88)
  '75': 'TX', '76': 'TX', '77': 'TX', '78': 'TX', '79': 'TX', '88': 'TX',
  // Florida (32-34)
  '32': 'FL', '33': 'FL', '34': 'FL',
  // New York (10-14, 00-06 for NYC)
  '10': 'NY', '11': 'NY', '12': 'NY', '13': 'NY', '14': 'NY',
  // Pennsylvania (15-19)
  '15': 'PA', '16': 'PA', '17': 'PA', '18': 'PA', '19': 'PA',
  // Illinois (60-62)
  '60': 'IL', '61': 'IL', '62': 'IL',
  // Ohio (43-45)
  '43': 'OH', '44': 'OH', '45': 'OH',
  // Georgia (30-32)
  '30': 'GA', '31': 'GA',
  // North Carolina (27-28)
  '27': 'NC', '28': 'NC',
  // New Jersey (07-08)
  '07': 'NJ', '08': 'NJ',
  // Massachusetts (01-02, 05)
  '01': 'MA', '02': 'MA', '05': 'MA',
  // Arizona (85-86)
  '85': 'AZ', '86': 'AZ',
  // Nevada (89)
  '89': 'NV',
  // Colorado (80-81)
  '80': 'CO', '81': 'CO',
  // Washington (98-99)
  '98': 'WA', '99': 'WA',
  // Oregon (97)
  '97': 'OR',
  // Michigan (48-49)
  '48': 'MI', '49': 'MI',
  // Indiana (46-47)
  '46': 'IN', '47': 'IN',
  // Wisconsin (53-54)
  '53': 'WI', '54': 'WI',
  // Minnesota (55-56)
  '55': 'MN', '56': 'MN',
  // Missouri (63-65)
  '63': 'MO', '64': 'MO', '65': 'MO',
  // Maryland (20-21)
  '20': 'MD', '21': 'MD',
  // Virginia (22-24)
  '22': 'VA', '23': 'VA', '24': 'VA',
  // South Carolina (29)
  '29': 'SC',
  // Tennessee (37-38)
  '37': 'TN', '38': 'TN',
  // Alabama (35-36)
  '35': 'AL', '36': 'AL',
  // Louisiana (70-71)
  '70': 'LA', '71': 'LA',
  // Oklahoma (73-74)
  '73': 'OK', '74': 'OK',
  // Kansas (66-67)
  '66': 'KS', '67': 'KS',
  // Nebraska (68-69)
  '68': 'NE', '69': 'NE',
  // Iowa (50-52)
  '50': 'IA', '51': 'IA', '52': 'IA',
  // Arkansas (71-72) - Note: 71 overlaps with Louisiana, using AR
  '72': 'AR',
  // Mississippi (39)
  '39': 'MS',
  // Kentucky (40-42)
  '40': 'KY', '41': 'KY', '42': 'KY',
  // West Virginia (25-26) - Note: 24 overlaps with Virginia
  '25': 'WV', '26': 'WV',
  // Connecticut (06)
  '06': 'CT',
  // Rhode Island (02) - Note: overlaps with Massachusetts, using RI
  // New Hampshire (03) - Note: overlaps with Massachusetts, using NH
  // Maine (04)
  '04': 'ME',
  // Vermont (05) - Note: overlaps with Massachusetts, using VT
  // Delaware (19) - Note: overlaps with Pennsylvania, using DE
  // DC (20) - Note: overlaps with Maryland, using DC
  // New Mexico (87)
  '87': 'NM',
  // Utah (84)
  '84': 'UT',
  // Idaho (83)
  '83': 'ID',
  // Montana (59)
  '59': 'MT',
  // Wyoming (82)
  '82': 'WY',
  // North Dakota (58)
  '58': 'ND',
  // South Dakota (57)
  '57': 'SD',
  // Alaska (99) - Note: overlaps with Washington, using AK
  // Hawaii (96) - Note: overlaps with California, using HI
};

/**
 * Lookup electric providers by ZIP code
 * @param zipCode - 5-digit ZIP code
 * @returns Array of electric providers serving that area
 */
export function lookupProvidersByZipCode(zipCode: string): ElectricProvider[] {
  if (!zipCode || zipCode.length !== 5) {
    return [];
  }

  const prefix = zipCode.substring(0, 2);
  const state = zipCodeToState[prefix];

  if (!state) {
    return [];
  }

  return electricProviders[state] || [];
}

/**
 * Get state name from ZIP code
 * @param zipCode - 5-digit ZIP code
 * @returns State code (e.g., 'CA', 'TX')
 */
export function getStateFromZipCode(zipCode: string): string | null {
  if (!zipCode || zipCode.length !== 5) {
    return null;
  }

  const prefix = zipCode.substring(0, 2);
  return zipCodeToState[prefix] || null;
}

/**
 * Get state full name from state code
 * @param stateCode - 2-letter state code
 * @returns Full state name
 */
export function getStateFullName(stateCode: string): string {
  const stateNames: Record<string, string> = {
    CA: 'California', TX: 'Texas', FL: 'Florida', NY: 'New York',
    PA: 'Pennsylvania', IL: 'Illinois', OH: 'Ohio', GA: 'Georgia',
    NC: 'North Carolina', NJ: 'New Jersey', MA: 'Massachusetts', AZ: 'Arizona',
    NV: 'Nevada', CO: 'Colorado', WA: 'Washington', OR: 'Oregon',
    MI: 'Michigan', IN: 'Indiana', WI: 'Wisconsin', MN: 'Minnesota',
    MO: 'Missouri', MD: 'Maryland', VA: 'Virginia', SC: 'South Carolina',
    TN: 'Tennessee', AL: 'Alabama', LA: 'Louisiana', OK: 'Oklahoma',
    KS: 'Kansas', NE: 'Nebraska', IA: 'Iowa', AR: 'Arkansas',
    MS: 'Mississippi', KY: 'Kentucky', WV: 'West Virginia', CT: 'Connecticut',
    RI: 'Rhode Island', NH: 'New Hampshire', ME: 'Maine', VT: 'Vermont',
    DE: 'Delaware', DC: 'District of Columbia', NM: 'New Mexico', UT: 'Utah',
    ID: 'Idaho', MT: 'Montana', WY: 'Wyoming', ND: 'North Dakota',
    SD: 'South Dakota', AK: 'Alaska', HI: 'Hawaii',
  };

  return stateNames[stateCode] || stateCode;
}
