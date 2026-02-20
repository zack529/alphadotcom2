'use client';

import { useState } from 'react';
import { Modal } from './Modal';
import { Person } from '@/content/people';

type PeopleGridProps = {
  people: Person[];
};

export function PeopleGrid({ people }: PeopleGridProps) {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <button
            key={person.name}
            type="button"
            onClick={() => setSelectedPerson(person)}
            className="rounded-sm border border-black/10 bg-white p-6 text-left transition hover:border-black/30 hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <p className="text-xl font-medium">{person.name}</p>
            <p className="mt-1 text-sm text-black/70">{person.title}</p>
          </button>
        ))}
      </div>

      <Modal
        isOpen={selectedPerson !== null}
        onClose={() => setSelectedPerson(null)}
        title={selectedPerson?.name ?? 'Person'}
      >
        <p className="text-sm uppercase tracking-wide text-black/60">{selectedPerson?.title}</p>
        <p>{selectedPerson?.bio}</p>
        {selectedPerson ? (
          <a
            href={selectedPerson.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-accent transition hover:underline hover:underline-offset-4"
          >
            LinkedIn
          </a>
        ) : null}
      </Modal>
    </>
  );
}
