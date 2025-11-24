import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    const trimmedFirstName = firstName?.trim();
    if (!trimmedFirstName) {
      return NextResponse.json(
        { 
          error: 'First name is required',
          code: 'MISSING_FIRST_NAME' 
        },
        { status: 400 }
      );
    }

    const trimmedLastName = lastName?.trim();
    if (!trimmedLastName) {
      return NextResponse.json(
        { 
          error: 'Last name is required',
          code: 'MISSING_LAST_NAME' 
        },
        { status: 400 }
      );
    }

    const trimmedEmail = email?.trim();
    if (!trimmedEmail) {
      return NextResponse.json(
        { 
          error: 'Email is required',
          code: 'MISSING_EMAIL' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { 
          error: 'Invalid email format',
          code: 'INVALID_EMAIL' 
        },
        { status: 400 }
      );
    }

    const trimmedSubject = subject?.trim();
    if (!trimmedSubject) {
      return NextResponse.json(
        { 
          error: 'Subject is required',
          code: 'MISSING_SUBJECT' 
        },
        { status: 400 }
      );
    }

    const trimmedMessage = message?.trim();
    if (!trimmedMessage) {
      return NextResponse.json(
        { 
          error: 'Message is required',
          code: 'MISSING_MESSAGE' 
        },
        { status: 400 }
      );
    }

    // Prepare insert data
    const insertData = {
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      email: trimmedEmail.toLowerCase(),
      phone: phone?.trim() || null,
      subject: trimmedSubject,
      message: trimmedMessage,
      createdAt: new Date().toISOString(),
    };

    // Insert contact submission
    const newSubmission = await db.insert(contactSubmissions)
      .values(insertData)
      .returning();

    return NextResponse.json(newSubmission[0], { status: 201 });
  } catch (error) {
    console.error('POST contact submission error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
      },
      { status: 500 }
    );
  }
}