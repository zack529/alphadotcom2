'use client';

import { FormEvent, useState } from 'react';

type InquiryType = 'Capital Partnership' | 'Creative Partnership' | 'General';

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
  inquiryType: InquiryType;
};

const initialValues: FormValues = {
  name: '',
  email: '',
  company: '',
  message: '',
  inquiryType: 'General'
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setSubmitted(false);
      return;
    }

    console.log('Contact form payload', values);
    setSubmitted(true);
    setErrors({});
    setValues(initialValues);
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-black/10 bg-white p-8">
        <p className="text-lg">Thank you. Your message has been received.</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-accent transition hover:underline hover:underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-sm border border-black/10 bg-white p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          Name *
          <input
            type="text"
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-sm border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.name ? <span className="text-sm text-red-700">{errors.name}</span> : null}
        </label>

        <label className="space-y-2 text-sm">
          Email *
          <input
            type="email"
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-sm border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {errors.email ? <span className="text-sm text-red-700">{errors.email}</span> : null}
        </label>
      </div>

      <label className="block space-y-2 text-sm">
        Company
        <input
          type="text"
          value={values.company}
          onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
          className="w-full rounded-sm border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </label>

      <label className="block space-y-2 text-sm">
        Inquiry Type
        <select
          value={values.inquiryType}
          onChange={(event) => setValues((current) => ({ ...current, inquiryType: event.target.value as InquiryType }))}
          className="w-full rounded-sm border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option>Capital Partnership</option>
          <option>Creative Partnership</option>
          <option>General</option>
        </select>
      </label>

      <label className="block space-y-2 text-sm">
        Message *
        <textarea
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          rows={6}
          className="w-full rounded-sm border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.message ? <span className="text-sm text-red-700">{errors.message}</span> : null}
      </label>

      <button
        type="submit"
        className="rounded-sm bg-black px-5 py-3 text-sm text-white transition hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Submit
      </button>
    </form>
  );
}
